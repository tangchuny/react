import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increaseAction } from '../actions/IncreaseAction'//import * as increaseAction 这个方法无效

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
     value: state.count
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	//increaseAction() 要加（）才能拿到返回的对象，dispatch需要传的是对象
  return {
    onIncreaseClick: () => dispatch(increaseAction())
  }
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
