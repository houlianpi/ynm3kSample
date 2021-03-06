#import "ynm3k/robot4ios/importAll.js"


test("增加一个饺子的菜单，通过判断总菜单数量的变化来判断测试是否成功",
    function(){
        oldCellsLength = Finder.findElementsByClassType("TableCell").length
        Finder.findElementByName("Add").tap();
        Finder.findElementByValue("Recipe Name").setValue("饺子");
        Finder.findElementByName("Save").tap();
        Finder.findElementByNameAndClassType("Recipes","Button").tap();
        newCellsLength = Finder.findElementsByClassType("TableCell").length
        Assert.areEqual(newCellsLength,oldCellsLength+1)
    });
 

test("删除刚才添加的饺子菜单，通过判断总菜单数量的变化来判断测试是否成功",
    function(){
        oldCellsLength = Finder.findElementByName("Empty list").cells().length
        /* 
           iOS7和iOS6及一下版本的主要区别：
           1、iOS7 滑动动作不生效，是iOS7的bug；
           2、tableview的默认删除按钮的name属性发生了变化。iOS7变更为Delete；而之前的为Confirm Deletion for xxx。
        */
        var systemVersion = parseFloat(target.systemVersion())
        if (systemVersion >= 7.0) {
            Finder.findElementByName("Edit").tap();
            Finder.findElementByName("Delete 饺子").tap();
            Finder.findElementByName("饺子").buttons()["Delete"].tap();
            Finder.findElementByName("Done").tap()
        }else{
            Finder.findElementByName("饺子").dragInsideWithOptions({startOffset:{x:0.6,y:0.6},endOffset:{x:0.2,y:0.2},duration:1});
            Finder.findElementByName("饺子").buttons()["Confirm Deletion for 饺子"].tap()
        }
        newCellsLength = Finder.findElementsByClassType("TableCell").length
        Assert.areEqual(newCellsLength,oldCellsLength-1);
    });