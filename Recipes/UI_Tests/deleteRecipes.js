var target = UIATarget.localTarget(); 
var app = target.frontMostApp();
var window = target.frontMostApp().windows()[0];
oldCellsLength = window.tableViews()[0].cells().length
window.tableViews()["Empty list"].cells()["饺子"].dragInsideWithOptions({startOffset:{x:0.6,y:0.6},endOffset:{x:0.2,y:0.2},duration:1});
window.tableViews()["Empty list"].cells()["饺子"].buttons()["Confirm Deletion for 饺子"].tap();
target.delay(1);
newCellsLength = window.tableViews()[0].cells().length
if(newCellsLength == oldCellsLength-1)
{
    UIALogger.logPass("test passed");
}else
{
    UIALogger.logFail("test failed");
}
