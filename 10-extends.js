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