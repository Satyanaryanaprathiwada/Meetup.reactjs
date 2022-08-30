import {Option} from '../Register/registerStyle'

const OptionItem = props => {
  const {details} = props
  const {id, displayText} = details

  return <Option value={id}>{displayText}</Option>
}

export default OptionItem
