// import { useState } from 'react'
// import { red } from '@ant-design/colors';
import { ConfigProvider, theme } from 'antd';
import { Button, Divider, Modal } from 'antd'
import { Store } from './globalStore';
import { observer } from 'mobx-react-lite';
import { MoonOutlined, MoonFilled, UploadOutlined, CameraOutlined, CopyOutlined, CloseOutlined } from '@ant-design/icons';
import './App.css'

const App = observer(() => {
  const { Dark_themeState } = Store;

      return (
    <ConfigProvider
      theme={{
        algorithm: Dark_themeState === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          // 自定义主题令牌
          colorBgContainer: Dark_themeState === 'dark' ? '#141414' : '#ffffff', // 组件背景色
        },
      }}
    >
      <div className="app-container">
        
        <header className="app-header">
          <div className="header-left">
  
          </div>
          <div className='header-center'>
      
          </div>
          
          <div className="header-right">
            <Button 
              className='dark_theme_toggle_button'
              type="text" 
              icon={Dark_themeState === 'dark' ? <MoonFilled /> : <MoonOutlined />}
              onClick={() => Store.Dark_themeState = Store.Dark_themeState === 'dark' ? 'light' : 'dark'}
            />
          </div>
        </header>
        {/* 其他组件 */}
        
      </div>

    </ConfigProvider>
  )
})

export default App;
