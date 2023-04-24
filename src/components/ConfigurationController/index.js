// Write your code here
// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <nav className="layout_navBar">
          <h1 className="heading_layout">Layout</h1>
          <ul className="ul_layout_options">
            <li className="li_layout_option">
              <input
                onChange={onToggleShowContent}
                checked={showContent}
                className="checkbox"
                id="content"
                type="checkbox"
              />
              <label className="label_for_option" htmlFor="content">
                Content
              </label>
            </li>
            <li className="li_layout_option">
              <input
                onChange={onToggleShowLeftNavbar}
                checked={showLeftNavbar}
                className="checkbox"
                id="leftNavbar"
                type="checkbox"
              />
              <label className="label_for_option" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </li>
            <li className="li_layout_option">
              <input
                onChange={onToggleShowRightNavbar}
                checked={showRightNavbar}
                className="checkbox"
                id="rightNavbar"
                type="checkbox"
              />
              <label className="label_for_option" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </li>
          </ul>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
