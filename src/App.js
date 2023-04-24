import {Component} from 'react'
import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(preState => ({showContent: !preState.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(preState => ({showLeftNavbar: !preState.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(preState => ({showRightNavbar: !preState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <>
        {/* <ConfigurationController /> */}
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.onToggleShowContent,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          }}
        >
          <div className="app_container">
            <ConfigurationController />
            <div className="app_content_container">
              <Layout />
            </div>
          </div>
        </ConfigurationContext.Provider>
      </>
    )
  }
}

export default App
