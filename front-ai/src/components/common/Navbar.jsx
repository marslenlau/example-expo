import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import { Button, Layout, Menu, Avatar, Dropdown, Space, Drawer } from 'antd';
import {useNavigate} from 'react-router-dom'
import useInformation from '../../hooks/useInformation';
import { 
    AppstoreOutlined, 
    MailOutlined,  
    UserOutlined, 
    CloseCircleOutlined, 
    SettingOutlined,
    MessageOutlined 
} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const Navbar = () => {
    //?
    const {setPreferences, setInformation} = useInformation()
    //? useNavigate
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const items1 = [
        {
            label: (
                <Link to={`/dashboard`}>Inicio</Link>
            ),
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: (
                <Link to={`/dashboard/list`}>Listado</Link>
            ),
            key: 'chat',
            icon: <MessageOutlined />,
        },
        {
            label: (
                <Link to={`/dashboard/preferences`}>Sugerencias</Link>
            ),
            key: 'report',
            icon: <SettingOutlined />,
        },
        
    ];
    const items = [
        {
            label: 'Perfil de usuario',
            key: '0',
            icon: <UserOutlined />,
            disabled: true,
        },
        {
            label: <span>Cerrar Sesion</span>,
            key: '1',
            icon: <CloseCircleOutlined />,
            onClick: () => {
                localStorage.removeItem('id')
                localStorage.removeItem('name')
                setPreferences([])
                setInformation([])
                navigate(`/`)
            }
        },
    ];
    return (
        <Header
            style={{
                padding: '0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >   
            <Drawer 
                title="IEAchat" 
                open={open} 
                placement="right" 
                onClose={onClose} 
                size='large'
            >
                <p style={{ fontSize : '1rem'}}><Link to="/dashboard" onClick={() => setOpen(false)}>Inicio</Link></p> 
                <p style={{ fontSize : '1rem'}}><Link to="/dashboard/chat" onClick={() => setOpen(false)}>Chat</Link></p> 
            </Drawer>
            <Menu 
                mode="horizontal" 
                items={items1} 
                theme='dark' 
                style={{ background: 'transparent', width: '100%'}}
            />
            <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    <Space>
                        <span style={{color: 'white'}}>Admin</span>
                        <Avatar size={40} icon={<UserOutlined />} />
                    </Space>
                </Dropdown>
        </Header>
    )
}

export default Navbar