# React

[TOC]



## 主讲：崔译

## 一、简介

[首页](https://reactjs.org/)

[文档](https://reactjs.org/docs/hello-world.html)

[中文文档](https://doc.react-china.org/)



> A JavaScript library for building user interfaces
>
> 用于构建用户界面的Javascript 库

- 是 JS 库
- 用于 构建 HTML  ==>  在 React 项目中， 不存在 HTML， 纯  JS 代码

## 二、HelloWorld

### 1、安装react 以及 babel

```html
<!--使用CDN安装-->
<!--development 开发  开发版-->
<!--React的核心库，提供关于React的核心API-->
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<!--React 的动态渲染库，提供的是对DOM的操作-->
<!-- 依赖于核心库 -->
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<!--production 生产  相当于之前接触的 min 版 -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

```html
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
```

NPM 安装

```shell
sudo npm install react
sudo npm install react-dom
```

### 2、编写代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!--导入顺序-->
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
    
</head>
<body>
    <div id="root"></div>
    <!--标签位置、type值-->02-
    <script type="text/babel">
        ReactDOM.render(
            <h1>Hello React</h1>,
            document.getElementById("root")
        );
     </script>
</body>
</html>
```

## 三、JSX

> https://github.com/facebook/jsx
>
> JSX is an XML-like syntax extension to ECMAScript without any defined semantics.
>
> 类似于XML语法扩展，在ES标准中并没有任何的语义定义

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
</head>
<body>
    <abc>asdasdas<</abc>
    <div id="root"></div>
    <script  type="text/babel">
        
        let formatUser = (user)=> `hello,${user.firstName} . ${user.lastName} `;
        
        let user = {
            firstName:'隔壁',
            lastName:'老王'
        }
        
        const element  = (
            <div>
                <abc>{formatUser(user)} </abc>
                <h1>{formatUser(user)}</h1>
                <h1>{1+2}</h1>
            </div>
        );

        ReactDOM.render(
            element,
            document.getElementById("root")
        );
    </script>

</body>
</html>
```

### 3-1 XML

- 可扩展标记语言

- 语法类似于HTML

- 特点

  - 有且只能有一个**根标签**

  - 标签名任意，属性名任意

  - 标签属性 **区分大小写**

  - 标签一定要闭合

    ```html
    html 对 <input type='text'>
    xml 对 <input type='text' />  xml 错 <input type='text' > 
    ```

### 3-2 JSX 解析规则

在 JSX 中，可以嵌入 javascript 的基本语法 和  函数的调用， 但是 **不能使用结构化的代码，分支，循环等等**, 如 `if`,`for`,`while`…..



**解析规则**



1. 标签如果是 `<小写字母开头>`, 使用html规则进行解析
2. 标签如果是 `<大写字母开头>`, 使用React的 Component 规则解析
3. 对于JSX中的代码块 `{xxxx}`, 使用javascript 规则解析
4. 在JSX 的代码块中，一定要小心  **`false`,`null`,`undefined`,`true`**, 以上值 都是 React 的 有效 子代，不会直接被渲染（即：直接使用，在页面中无法显示），可以使用 类型转换 将其转换成 `string` 类型
5. 在JSX 的代码块中，不能直接写对象类型，使用`toString` 方法
6. 不能使用结构化的代码，分支，循环等等

> 练习： 随机产生两个[0,10]的整数，
>
> 在页面中显示 第一个数为：4 ， 第二个数为：7 ， 第一个数大于第二个数： false，

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
</head>
<body>
    <pre>
            练习： 随机产生两个[0,10]的整数，
            在页面中显示 第一个数为：4 ， 第二个数为：7 ， 第一个数大于第二个数： false，
    </pre>
    <div id="root"></div>

   
    <script  type="text/babel">
        const nums = {
            m : Number.parseInt(Math.random()*11),
            n : Number.parseInt(Math.random()*11)
        }
        // console.log(nums.m)

        const element  = (
            <div>
                <h1>第1个数m为:{ nums.m }</h1>
                <h1>第2个数n为:{ nums.n }</h1>
                <h1>m > n:{ nums.m > nums.n ? "true" : "false"}</h1>                
                <h1>m > n:{ "" + (nums.m > nums.n) }</h1>                
                <h1>m > n:{ String(nums.m > nums.n) }</h1>                
                <h1>m > n:{ (nums.m > nums.n).toString() }</h1>                
            </div>
        );

        ReactDOM.render(
            element,
            document.getElementById("root")
        );
    </script>

</body>
</html>
```

### 3-3 数组的展开渲染（循环）

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
</head>
<body>
    <pre>
            练习： 实现将用户数组变成ul->li 展示在页面上，
            li中的内容是 姓名-年龄
    </pre>
    <div id="root">

    </div>

   
    <script  type="text/babel">

        const userList = [
            {name:'张三',age:22},
            {name:'张思',age:33},
            {name:'彰武',age:44},
            {name:'张柳',age:55},
        ];
        
        let fun = () => {
            // let arr = [];
            // for(let i = 0 ; i < userList.length ; i++)
            // {
            //     arr.push(<li>{userList[i].name}-{userList[i].age}</li>);
            // }
            
            // map 方法是js数组中的一个方法，
            // 参数是一个函数callback，
            //      作用： 会遍历原数组中的所有元素，对每一个元素调用callback方法，
            //              callback方法 第一个参数是每次遍历的数组元素
            //                          第二个参数是数组元素的  索引（下标 index）
            //              callback方法 具有返回值，map 方法会返回 每次调用callback方法返回的值 组成的数组
            /*
                        例如：
                            let arr = [1,2,3]
                            let newArr = [];
                            for(let item of arr)
                            {
                                // 次方运算 item的2次方
                                newArr.push(item ** 2);
                            }
                            console.log(newArr);
                        等效于
                            let arr = [1,2,3];
                            let newArr = arr.map((item) =>  item ** 2);
                
            */
            let arr = userList.map((user,i) => <li key={i}>{user.name}-{user.age}-{i}</li>);
            return arr;
        }

        const element  = (
            <ul>
               {fun()}
            </ul>
        );

        ReactDOM.render(
            element,
            document.getElementById("root")
        );
    </script>

</body>
</html>
```

### 3-4 条件判断

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
</head>
<body>
    
    <pre>
        用户输入一个学生成绩，prompt，
        [0,60)分 页面显示不及格
        [60-80)显示及格
        [80-90)显示良好
        [90-100]显示优秀
    </pre>

    <div id="r"></div>

    <script type="text/babel">
        
        let calcScore = () => {
            // let score = prompt('') * 1;
            let score = Number.parseInt(prompt("请输入学生成绩",0) / 10);
            let result = "不及格";
            switch(score){
                case 6:
                case 7:
                    result = "及格"
                    break;
                case 8:
                    result = "良好"
                    break;
                case 9:
                case 10:
                    result = "优秀"
                    break;
            }
            return result;
        }

        let element = (
           <p> {calcScore()} </p>
        )

        ReactDOM.render(
            element,
            document.querySelector("#r")
        );
    </script>
</body>
</html>
```

### 3-5 属性的绑定

1. HTML 属性的绑定 直接使用字符串渲染

   ```jsx
   let hl = 'aaa';
   <span itany='abc' helloworld={hl} > {result} </span>;
   ```

   ​

2. class 属性 使用DOM属性进行绑定 （class —> className）

   ```jsx
   let cls = 'danger';
   <span className={cls} > {result} </span>;
   ```

   ​

3. style 属性 使用 js 对象进行绑定 （**js对象中的css样式名使用aaaBbbCcc的方式**）

```jsx
 let style = {
     color:'red',
     fontSize:'60px'
 }
<span style={style}> {result} </span>
{
    //我是注释
    /*我是注释*/
    /**我是注释*/
}
<span style={{color:'red'}}>aaaa</span>
```

## 四、元素渲染

> React elements are [immutable](https://en.wikipedia.org/wiki/Immutable_object). Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
>
> React 元素都是[immutable 不可变](https://en.wikipedia.org/wiki/Immutable_object)的。当元素被创建之后，你是无法改变其内容或属性的。一个元素就好像是动画里的一帧，它代表应用界面在某一时间点的样子。

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
    <style>
        .danger{
            color: cadetblue;
        }
    </style>
</head>
<body>

    <div id="r"></div>

    <script type="text/babel">
        


        // setInterval(()=> {
        //     curTime = new Date().toLocaleString()
        //     console.log(curTime)
        // },1000);

        let load = ()=>{
            let curTime = new Date().toLocaleString();
        
            let element = (
                <div>
                    <p>{curTime}</p>
                    <img src={"https://www.baidu.com/img/bd_logo1.png?where=super&d="+new Date()} />
                    <p>
                        aksdjkladjkladjklasdjkladjkalsdjkl
                        aksdjkladjkladjklasdjkladjkalsdjkl
                        aksdjkladjkladjklasdjkladjkalsdjkl
                        aksdjkladjkladjklasdjkladjkalsdjkl
                        aksdjkladjkladjklasdjkladjkalsdjkl
                        aksdjkladjkladjklasdjkladjkalsdjkl
                        aksdjkladjkladjklasdjkladjkalsdjkl
                    </p>
                </div>
            )

            ReactDOM.render(
                element,
                document.getElementById("r")
            );
        }
        setInterval(load,1000);
    </script>
</body>
</html>
```



> React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
>
> React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。

**但是**



> in practice, most React apps only call `ReactDOM.render()` once.
>
> 在实际生产开发中，大多数React应用只会调用一次 `ReactDOM.render()` 

## 五、组件

- React 中的组件 实际上是一个符合React规范的 javascript 对象
- React 组件的名称  **首字母必须大写** 
- React 组件 **有且只有一个根标签**

### 5-1 使用函数定义React组件

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
</head>
<body>
    
    <div id="d"></div>

    

    <script type="text/babel">
        // 定义组件
        // 组件名首字母大写
        // 组件函数接收一个参数，参数名一般情况下为props, 是所有组件参数构成的对象
        function ComA(props)
        {
            let user = props.user;
            console.log(props['hello-world']);
            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>姓名</td>
                                <td>年龄</td>
                            </tr>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>
            )
        }


        const element = (
            <div>
                <ComA user={{name:'z3',age:22}} abc='123' hello-world="haha"></ComA>
                <ComA user={{name:'z4',age:223}} abc='234'></ComA>
                <ComA user={{name:'z5',age:224}} abc='2345'></ComA>
            </div>
        )

        ReactDOM.render(
            element,
            document.getElementById('d')
        );

    </script>
</body>
</html>
```

### 5-2 使用React.createClass() 创建组件

**该方法在16以上版本中 被废弃**



### 5-3 使用ES6 中的class 创建组件

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
</head>
<body>
    
    <div id="d"></div>

    

    <script type="text/babel">
        
        // 使用ES6 的class 定义组件
        class ComA extends React.Component {
            render(){
                // 返回的是 JSX
                // 组件参数的获取方式 this.props.参数名
                return <p>{this.props.user.name}</p>
            }
        }
        
        // import {ComB} from "./component"

        const element = (
            <div>
                <ComA user={{name:'z3',age:22}} abc='123' hello-world="haha"></ComA>
                <ComA user={{name:'z4',age:223}} abc='234'></ComA>
                <ComA user={{name:'z5',age:224}} abc='2345'></ComA>
                {
                    //<ComB data="hehe"/>
                }
            </div>
        )

        ReactDOM.render(
            element,
            document.getElementById('d')
        );

    </script>
</body>
</html>
```

### 5-4  **props 的只读性**

**Cannot assign to read only property 'abc' of object '#<Object>'**



**组件参数是只读的，参数值不能被修改**



```jsx
 render(){
     console.log(this.props.abc)
     this.props.abc = "234";
     return (
         <p>asdasd</p>
     )
 }
```



## 六、React 中事件的绑定

### 6-1 事件绑定方式

React 中事件的绑定方式类似于DOM，但是事件名需要使用 驼峰命名法

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
</head>
<body>
    
    <div id="d"></div>

    

    <script type="text/babel">
        
        // 使用ES6 的class 定义组件
        class ComA extends React.Component {
            msg='hehe'
            // constructor(){
            //     // 是一个函数，调用父类的构造函数
            //     // 详见10-extends.html
            //     super();
            //     // console.log('cons.....')
            //     // console.log(this,this.msg);
            //     this.func();
            // }
            handler(){
                console.log(this)
            }
            handlerWithThis(){
                console.log(this.msg)
            }
            render(){
                // 事件的绑定
                // 事件名 使用驼峰命名法： 首字母小写，从第二个单词开始每个单词首字母大写
                // 值是 class中的一个方法
                return (
                    <p>
                        {/*使用该方式绑定的事件处理函数中，this 是undefined*/}
                        <button onClick={this.handler}>我是一个按钮</button>
                        {/*为JSX事件绑定this对象,this.事件名称.bind(this)*/}
                        <button onClick={this.handlerWithThis.bind(this)}>我是一个有this的按钮</button>
                    </p>
                )
            }
        }
        

        const element = (
            <div>
                <ComA user={{name:'z3',age:22}} abc='123' hello-world="haha"></ComA>
            </div>
        )

        ReactDOM.render(
            element,
            document.getElementById('d')
        );

    </script>
</body>
</html>
```

```js
class SomeClass{
    constructor(name){
        console.log('someClass const....')
        this.name = name;
    }
}

class OtherClass extends SomeClass{
    // 创建子类对象，如果子类中没有显式的声明构造方法，会默认调用父类的构造方法

    // 如果显式的声明了 构造方法，需要手动的在访问（使用）this之前，使用super() 调用父类构造方法
    constructor(){
        console.log(1111);
        // 特指父类的构造方法
        // super 方法创建并返回this对象
        console.log(super('zhangsan') === this);
        this.age = 22;
        
    }
}

let oth = new OtherClass();
console.log(oth);
```

作业



```
页面提供输入框，
当用户向输入框中输入内容时，在控制台实时的打印用户输入的内容
abcdef
a
ab
abc
abcd
abcdef
```

### 6-2 参数的传递

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
</head>
<body>
    
    <div id="d"></div>


    <script type="text/babel">
        
        // 使用ES6 的class 定义组件
        class ComA extends React.Component {
            handlerWithThis(msg,user,arr,e){
                console.log(msg,user,arr);
                // event
                console.log(e);
                console.log(e.target);
            }
            render(){
                return (
                    <p>
                        {
                            /*
                                在JSX中， 事件绑定后（bind中），存在以下几个参数
                                    this --> 为了在事件处理函数中能够获取到 this对象
                                    0或多个自定义参数，作为事件处理函数的参数

                                在 事件处理函数handlerWithThis中，存在以下几个参数
                                    不需要显式的声明一个参数来接收this，可以直接在函数体中使用this
                                    从第一个参数开始后的参数为上面传递的自定义参数
                                    最后一个参数为事件对象
                            */
                        }
                        <button onClick={this.handlerWithThis.bind(this,"消息",{name:'aaa',age:22},[23,46,8,34])}>我是一个有this的按钮</button>
                    </p>
                )
            }
        }
        

        const element = (
            <div>
                <ComA user={{name:'z3',age:22}} abc='123' hello-world="haha"></ComA>
            </div>
        )

        ReactDOM.render(
            element,
            document.getElementById('d')
        );

    </script>
</body>
</html>
```

## 七、数据状态 state

**React 中的组件一旦被创建，内容无法修改。—> 无法实现数据的动态展示**



```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
</head>
<body>
    
    <div id="d"></div>


    <script type="text/babel">
        
        // 使用ES6 的class 定义组件
        class ComA extends React.Component {
            msg = "asdadasdasd";
            changeValue(e){
                // console.log(e.target.value)
                console.log(this.msg);
                this.msg = e.target.value;
                console.log(this.msg);
            }
            render(){
                return (
                    <p>
                        <input  value={this.msg} onChange={this.changeValue.bind(this)} />
                        <br/>
                        <span>{this.msg}</span>
                        <br/>
                        <button onClick={this.changeValue.bind(this,{target:{value:'aaaa'}})}>changeValue</button>
                    </p>
                )
            }
        }
        

        const element = (
            <div>
                <ComA></ComA>
            </div>
        )

        ReactDOM.render(
            element,
            document.getElementById('d')
        );

    </script>
</body>
</html>
```

**在组件中 借助React 中定义的state 状态完成 数据的动态渲染**



**React 的实现方式更加类似于  微信小程序**



**state 属性只能（必须）在构造函数中初始化，类似于小程序中的data**



```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
</head>
<body>
    
    <div id="d"></div>


    <script type="text/babel">
        
        // 使用ES6 的class 定义组件
        class ComA extends React.Component {
            
            constructor(props){
                super(props);
                // 初始化state
                // 该属性和普通属性的使用方式是一致的
                this.state = {
                    info : 'this is info'
                }
            }
            changeValue(e){
                this.setState({
                    info:'hahahah'
                });
            }
            render(){
                return (
                    <p>
                        <span>{this.state.info}</span>
                        <br/>
                        <button onClick={this.changeValue.bind(this)}>changeValue</button>
                        {/*
                            <button onClick={this.setState({info:'hehehe'})}>changeValue22</button>
                        */}
                    </p>
                )
            }
        }
        const element = (
            <div>
                <ComA></ComA>
            </div>
        )
        ReactDOM.render(
            element,
            document.getElementById('d')
        );

    </script>
</body>
</html>
```

**模拟实现  数据的双向绑定**

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
</head>
<body>
    
    <div id="d"></div>


    <script type="text/babel">
        
        // 使用ES6 的class 定义组件
        class ComA extends React.Component {
            
            constructor(props){
                super(props);
                // 初始化state
                // 该属性和普通属性的使用方式是一致的
                this.state = {
                    info : ''
                }
            }
            changeValue(e){
                this.setState({
                    info:e.target.value
                });
            }
            render(){
                return (
                    <p>
                        <span>{this.state.info}</span>
                        <br/>
                        <input onChange={this.changeValue.bind(this)}/>
                    </p>
                )
            }
        }
        const element = (
            <div>
                <ComA></ComA>
            </div>
        )
        ReactDOM.render(
            element,
            document.getElementById('d')
        );

    </script>
</body>
</html>
```

## 八、React 的模块化开发

### 1、React 项目的搭建

#### 8-1 安装React 脚手架

```shell
sudo npm install -g create-react-app
```

#### 8-2 创建React项目

```shell
create-react-app 项目名
```

#### 8-3 初始化项目(8-2 自动完成)

```shell
# 在项目根目录下
cd 项目名
npm install
```

#### 8-4 启动

```shell
npm start
```

#### 8-5 访问

`http://localhost:3000/`



### 2、React 项目结构

```
app
|----node_modules
|----public  用于存放对外公开的资源和配置信息
	|----favicon.ico 浏览器标签图标
	|----index.html  首页，主体页 配置在manifest.json中
	|----manifest.json 配置信息
|----src
	|----app.js    项目的根组件
	|----app.css
	|----index.js	应用程序入口，以及React的渲染方式
	|----index.css
	|----logo.svg
	|----registerServiceWorker.js 测试服务器
|----package.json
```

### 3、文件配置

index.html

```html
<!-- 
	%PUBLIC_URL%
		%xx% 取值的语法
		在使用 `npm run build` 构建应用程序的时候，可以指定PUBLIC_URL的值
		PUBLIC_URL=/XXXX npm run build
	简单来说，PUBLIC_URL可以理解为一个变量，在build的时候，为其指定值，确保在任何情况下，资源能够正常的访问到
-->
<link rel="manifest" href="%PUBLIC_URL%/manifest.json">
```

manifest.json

```json
{
  "display": "standalone",// 告诉移动设备，该应用程序是一个独立运行的应用程序
}
```

App.js

```javascript
// 必须存在，加载的是React 的核心组件(即:react.development.js文件) 和 组件模块
import React, { Component } from 'react';
// 引入图标文件，logo 可以直接在JSX中引用  {logo}
import logo from './logo.svg';
// 样式文件会影响下面的JSX元素
import './App.css';
```

### 4、重构React项目结构

**以下内容，为本人原创内容**

```
App
|---node_modules
|---public 资源文件夹
|---src
	|---app
		|---components
			|---ComA
				|---ComA.js
				|---ComA.css
			|---ComB
		|---App.js
		|---App.css
	|---index.js
	|---index.css
	|---registerServiceWorker.js
|---package.json

```

## 九、路由

React 本身不提供路由功能，路由是以组件的形式存在。

### 1、安装路由组件

```
npm install react-router --save
npm install react-router-dom -S
```

### 2、路由组件

| 组件名称                                  | 作用                                            |
| ----------------------------------------- | ----------------------------------------------- |
| &lt;BrowserRouter>内容&lt;/BrowserRouter> | 用于描述内容区具有路由功能                      |
| &lt;Route />                              | 用于为组件提供存放区域（一个组件对应一个Route） |
| &lt;Link />                               | 用于Route间的切换（即：组件间的切换）           |

### 3、使用方式

```jsx
import React, { Component } from 'react';
import { BrowserRouter,Route,Link } from "react-router-dom";
import logo from '../logo.svg';
import './App.css';

import AboutMe from './components/aboutme/AboutMe';
import BlogList from './components/bloglist/BlogList';
import Links from './components/links/Links';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
              <div className="row">
                <ul className="nav nav-pills">
                  <li className="active">
                      <Link to="/">博客列表</Link>
                  </li>
                  <li>
                      <Link to="/links">链接</Link>
                    </li>
                  <li>
                      <Link to="/aboutme">关于</Link>
                  </li>
                </ul>
              </div>

            <div className="row">
              <Route exact path="/" component={BlogList}></Route>
              <Route path="/links" component={Links}></Route>
              <Route path="/aboutme" component={AboutMe}></Route>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

```

### 4、嵌套路由

```jsx
import React , {Component} from 'react';
import { Route,Link } from "react-router-dom";
import  Some  from "../some/Some";
import Other from "../other/Other";

class Links extends Component{

    render(){
         // this.props
        //    location
        //    history
        //    match
        //        isExact
        //        url  当前路由的路径,真实的请求路径
        //        path Route组件上path的值
        //        params 路由参数对象
        console.log(this.props)
        return (
            <div>
                {
                    /*
                    <br/>
                    <Link to="/links/some">some</Link>
                    <br/>
                    <Link to="/links/other">other</Link>
                    <Route exact path="/links/some" component={Some}/>
                    <Route path="/links/other" component={Other}/>
                    */
                }
                {/*获取父路由的路径，当前路由的路径*/}
                {/*this.props.match.url*/}
                <br/>
                <Link to={this.props.match.url}>some</Link>
                <br/>
                <Link to={ `${this.props.match.url}/other` }>other</Link>
                <Route exact path={ this.props.match.url } component={Some}/>
                <Route path={ `${this.props.match.url}/other` } component={Other}/>
            </div>

        );
    }

}


export default Links;


```

### 5、路由参数

**React中路由参数是REST风格参数（参数在URL上）**



```jsx
<Route path="/blogdetail/:id" component={BlogDetail}></Route>

<Link to={`/blogdetail/${value.id}`}>{value.title}</Link>

render(){
    console.log(this.props.match.params.id)
    return (
        <h1>this is BlogDetail Page.....id : {this.props.match.params.id}</h1>
    );
}

```

## 十、Ajax

**React 并没有提供网络数据请求的任何方式（包括其模块）**



```
npm install jquery --save
```

```js
import React , {Component} from 'react';
import $ from "jquery";

export default class AjaxComponent extends Component{
    render(){
        return <h1>aaaa</h1>
    }
}
```

