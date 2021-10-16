import Button from './Button'

const Header = ({ onAdd, showAdd }) => {
  return (
    <div>
      <header className='header'>
        <h1>Task Tracker</h1>
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      </header>
    </div>
  )
}

// css in js
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
