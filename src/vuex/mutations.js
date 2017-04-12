export default {
  /*
   * 设置标题
   */
  setcurrentTitleName (state, name) {
    state.currentTitleName = name
  },
  /*
   * 设置是否需要显示返回按钮
   */
  setIsNeedShowBackButton (state, isNeed) {
    state.isNeedShowBackButton = isNeed
  }
}
