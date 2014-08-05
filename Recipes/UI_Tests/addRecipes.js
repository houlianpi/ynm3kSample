var target = UIATarget.localTarget(); 
var app = target.frontMostApp();
var window = target.frontMostApp().windows()[0];
oldCellsLength = window.tableViews()[0].cells().length
window.navigationBars()[0].buttons()["Add"].tap();
target.delay(1);
window.textFields()[0].setValue("饺子");
window.navigationBars()[0].buttons()["Save"].tap();
target.delay(1);
window.navigationBars()[0]. buttons()[0].tap();
newCellsLength = window.tableViews()[0].cells().length
if(newCellsLength == oldCellsLength+1)
{
    UIALogger.logPass("test passed");
}else
{
    UIALogger.logFail("test failed");
}
