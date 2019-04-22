import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import routes from './routes'
import {
  DashboardLayout,
  SidebarButton,
  SidebarHeader,
  SidebarMenu,
  SidebarSection,
  PolvoLogo,
  Icon
} from '../../src'

const screens = routes.reduce((memo, section) => {
  return memo.concat(section.routes)
}, [])

export default function App () {
  return (
    <ThemeProvider
      theme={{
        polvokit: {
          colors: {
            primary: 'hotpink'
          }
        }
      }}
    >
      <BrowserRouter>
        <DashboardLayout
          sidebar={
            <React.Fragment>
              <SidebarHeader>
                <PolvoLogo />
              </SidebarHeader>
              <SidebarMenu>
                {routes.map((section, index) => (
                  <SidebarSection
                    key={index}
                    title={section.title}
                    bottom={section.bottom}
                  >
                    {section.routes.map(route => (
                      <SidebarButton.NavLink
                        key={route.to}
                        to={route.to}
                        exact={route.exact}
                        before={<Icon icon={route.icon} />}
                        children={route.title}
                      />
                    ))}
                  </SidebarSection>
                ))}
              </SidebarMenu>
            </React.Fragment>
          }
        >
          <Switch>
            {screens.map(screen => (
              <Route
                key={screen.to}
                exact={screen.exact}
                path={screen.to}
                component={screen.component}
              />
            ))}
            <Route>
              {() => (
                <p>Page not found</p>
              )}
            </Route>
          </Switch>
        </DashboardLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
