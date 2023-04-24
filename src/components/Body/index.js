// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const renderLeftNavbarMenu = () => (
    <div className="part_of_body">
      <h1 className="body_part_heading">Left Navbar Menu</h1>
      <ul className="ul_items_container">
        <li className="li_item">item 1</li>
        <li className="li_item">item 2</li>
        <li className="li_item">item 3</li>
        <li className="li_item">item 4</li>
      </ul>
      {/* <p>renderLeftNavbarMenu</p> */}
    </div>
  )
  const renderContent = () => (
    <div className="part_of_body content_part">
      <h1 className="body_part_heading">Content</h1>
      <p className="content_description">
        Lorem ipsum dolor sit amet, consecterur adipiscing elit, sed do ciusmod
        tempor incididunt ut labore et dolore maqna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )
  const renderRightNavbarMenu = () => (
    <div className="part_of_body">
      <h1 className="body_part_heading">Right Navbar Menu</h1>
      <p className="box">Ad 1</p>
      <p className="box">Ad 2</p>
    </div>
  )
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body">
            {showLeftNavbar && renderLeftNavbarMenu()}
            {showContent && renderContent()}
            {showRightNavbar && renderRightNavbarMenu()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
