import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import Link from '@mui/joy/Link';

const MenuPadrao  = () => {
    return (
    <Dropdown>
        <MenuButton>Menu</MenuButton>
        <Menu>
            <MenuItem>
                <Link to="/CadastroCarona">Cadastrar Carona</Link>
            </MenuItem>
            <MenuItem>
                <a href="/ListarCaronas">Buscar Caronas</a>
            </MenuItem>
            <MenuItem>
                <a href="/Login">Login</a>
            </MenuItem>
        </Menu>
    </Dropdown>
    )
}

export default MenuPadrao;