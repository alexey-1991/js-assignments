
class cssSelectorBuilderClass{
    constructor(){
        this.result='';
        this.order=[];// array consists of selectors in call order;
    }

    element(str){
        const order=this.order.concat(['element']);
        str=this.result+`${str}`;

        return this.createNextBuilder(str,order);
    }
    id(str){
        const order=this.order.concat(['id']);
        str=this.result+`#${str}`;

        return this.createNextBuilder(str,order);
    }
    
    class(str){
        const order=this.order.concat(['class']);
        str=this.result+`.${str}`;

        return this.createNextBuilder(str,order);
    }
    attr(str){
        const order=this.order.concat(['attr']);
        str=this.result+`[${str}]`;

        return this.createNextBuilder(str,order);
    }
    pseudoClass(str){
        const order=this.order.concat(['pseudoClass'])
        str=this.result+`:${str}`;

        return this.createNextBuilder(str,order);
    }
    pseudoElement(str){
        const order=this.order.concat(['pseudoElement'])
        str=this.result+`::${str}`;

        return this.createNextBuilder(str,order);
    }

    createNextBuilder(initStr,order){
        let nextBuilder=new cssSelectorBuilderClass();
        nextBuilder.result+=initStr;
        nextBuilder.order=order;
        this.checkRepeats(order);
        return nextBuilder;
    }

    checkRepeats(order){
        const condElem=order.filter(elem=>elem==="element").length>1;
        const condId=order.filter(elem=>elem==="id").length>1;
        const condPseudoElem=order.filter(elem=>elem==="pseudoElement").length>1;

        if (condElem || condId || condPseudoElem){
            throw new Error("Error: wrong order");
        };
    }

    checkOrder(order){
        const rightOrder=['element', 'id', 'class', 'attr', 'pseudoClass', 'pseudoElement'];
        let selector='element';
        

        order.forEach(elem => {
            this.s    



            let elemIndex=rightOrder.indexOf(elem);
            let selectorIndex=rightOrder.indexOf(selector);

            if (selectorIndex>elemIndex) {
                
            } 

        });



    }


      

    combine(obj1,separator,obj2){
        const selector1=obj1.stringify();
        const selector2=obj2.stringify();
        let newSelector;
        if (separator!==" "){
            newSelector=selector1+" "+separator+" "+selector2;
        } else {
            newSelector=selector1+separator+selector2;
        }

        return this.createNextBuilder(newSelector);
    }

    stringify(){
        const res=this.result
        this.result='';
        this.order=[];
        return res;
    }
}

function cssSelectorBuilder(){
    return new cssSelectorBuilderClass()
};

const builder = new cssSelectorBuilderClass();

/* console.log("Simple Selectors")
console.log(builder.element('div').stringify())
console.log(builder.id('nav-bar').stringify())
console.log(builder.class('warning').stringify())
console.log(builder.attr('href$=".png').stringify())
console.log(builder.pseudoClass('invalid').stringify())
console.log(builder.pseudoElement('first-letter').stringify()) */

/* console.log("----------------------------");
console.log("Complex Selectors");
console.log(builder.element('li').id('main').stringify())
console.log(builder.element('div').class('container').stringify())
console.log(builder.element('div').class('container').class('clickable').stringify())
console.log(builder.id('main').class('container').class('editable').stringify())
console.log(builder.class('container').class('nav-bar').class('navbar-inverted').stringify())
console.log(builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify())
console.log(builder.element('p').pseudoClass('first-of-type').pseudoElement('first-letter').stringify())
console.log(builder.element('input').pseudoClass('focus').pseudoClass('invalid').stringify())
 */
/* console.log("----------------------------");
console.log("Combine Selectors");
console.log(
    builder.combine(
        builder.element('p').pseudoClass('focus'),
        '>',
        builder.element('a').attr('href$=".png"')
      ).stringify()
)
console.log(
    builder.combine(
        builder.element('p').id('introduction'),
        '~',
        builder.element('img').attr('href$=".png"')
      ).stringify()
)
console.log(
    builder.combine(
        builder.id('charter1').class('touch'),
        '+',
        builder.element('table')
      ).stringify()
)
console.log(
    builder.combine(
        builder.element('ul').class('animable'),
        ' ',
        builder.element('li').pseudoClass('nth-of-type(1)')
      ).stringify()
)
console.log(
    builder.combine(
        builder.element('div').id('main').class('container').class('draggable'),
        '+',
        builder.combine(
          builder.element('table').id('data'),
          '~',
          builder.combine(
            builder.element('tr').pseudoClass('nth-of-type(even)'),
            ' ',
            builder.element('td').pseudoClass('nth-of-type(even)')
          )
        )
      ).stringify()
)
 */

console.log("----------------------------");
console.log("Test validation");
// console.log(builder.element('table').id('div'));
// console.log(builder.id('id1').id('id2'));
// console.log(builder.pseudoElement('after').pseudoElement('before'));
// console.log(builder.class('draggable').class('animated'));
// console.log(builder.attr('href').attr('title'));
// console.log(builder.pseudoClass('invalid').pseudoClass('focus'));

console.log(builder.id('id').element('div'));
console.log(builder.class('main').id('id'));
console.log(builder.attr('href').class('download-link'));
console.log(builder.pseudoClass('hover').attr('title'));
console.log(builder.pseudoElement('after').pseudoClass('valid'));
console.log(builder.pseudoElement('after').id('id'));
