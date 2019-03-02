import * as React from 'react'
import nanoid from 'nanoid'
import ToastList from '../ToastList'

export const Context = React.createContext()

class ToastProvider extends React.Component {
  state = {
    messages: [
      {
        id: 1,
        type: 'success',
        content: 'Message content'
      }
    ],
    mounted: false
  }

  componentDidMount () {
    this.container = document.createElement('div')
    this.container.className = 'polvokit-toast-container'
    document.body.appendChild(this.container)
    this.setState({
      mounted: true
    })
  }

  componentWillUnmount () {

  }

  push = message => {
    const newMessage = {
      id: nanoid(),
      ...message
    }

    this.setState(state => ({
      messages: state.messages.concat(newMessage)
    }))

    return newMessage
  }

  dismiss = id => {
    this.setState(state => ({
      messages: state.messages.filter(
        message => message.id !== id
      )
    }))
  }

  render () {
    if (!this.state.mounted) {
      return null
    }

    const value = {
      push: this.push,
      dismiss: this.dismiss,
      messages: this.state.messages
    }

    return (
      <React.Fragment>
        <ToastList
          container={this.container}
          messages={value.messages}
          onDismiss={value.dismiss}
        />
        <Context.Provider value={value}>
          {this.props.children}
        </Context.Provider>
      </React.Fragment>
    )
  }
}

export default ToastProvider
