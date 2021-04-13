import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    //function to make button clickable and passed down into the below Button as a prop
    // const onClick = () => {
    //     console.log('click')
    // }
    return (
        <header className='header'>
          <h1>{title}</h1>  
          <Button 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'Close' : 'Add'} 
          onClick={onAdd}/>
        </header>
    )
}
//The code below can be put inline in the h1 up above. Ex: h1 style={{headingStyle}}
// const headingStyle = {
//     color: 'green',
//     backgroundColor: 'black'
// }

export default Header
