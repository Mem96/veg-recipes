import './PageHeader.css';
import {Outlet} from 'react-router-dom';

const PageHeader = () => {
  return (
<>
    <div className='header-container' key='header'>
    <h1 className='header-title'>Vegetarian recipes</h1>
    </div>
    <Outlet key='outlet' />
</>
  )
}

export default PageHeader;