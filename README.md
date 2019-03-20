# Polvokit

Polvokit is a React-based UI library developed and maintained by Polvo.

Check out the [documentation](https://polvo-labs.github.io/polvokit/).

## Stack

- react
- styled-components
- react-router

## Installation

```
yarn add polvokit
```

## Usage

Just import the components you want to use.
You don't need to include any global CSS. Just import the components:

```js
import { Button, Icon, Panel } from 'polvokit'

function Example () {
  return (
    <Panel header='My Panel'>
      <Button before={<Icon icon='home' />}>
        Click me
      </Button>
    </Panel>    
  )
}
```

## Roadmap

- [x] BackButton
- [x] Badge
- [x] Button
- [x] Calendar
- [x] DashboardLayout
- [x] FormGrid
- [x] FormGroup
- [x] Icon
- [x] Image
- [x] Input
- [x] InputDatePicker
- [x] InputDateRangePicker
- [x] Pagination
- [x] PolvoLogo
- [x] Select
- [x] Textarea
- [x] VerticalSpacer
- [x] Text
- [x] Link
- [x] mq utility
- [x] Option
- [x] Checkbox
- [x] Radio
- [x] Spinner
- [x] ButtonGroup
- [x] Switch
- [x] Box
- [x] Card
- [x] HorizontalSpacer
- [x] Toast
- [ ] Media
- [ ] Table
- [ ] Panel
- [ ] FileUploader
- [ ] Modal
- [ ] Theme overriding
