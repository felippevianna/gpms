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
                <a href="/Login">Login</a>
            </MenuItem>
            <MenuItem>
                <a href = "/carona">Cadastrar Carona</a>
            </MenuItem>
            <MenuItem>
                <a href="/listar-caronas">Buscar Caronas</a>
            </MenuItem>
            <MenuItem>
                <a href="/SolicitarCarona">Solicitar Carona</a>
            </MenuItem>
            <MenuItem>
                <a href="/Perfil">Meu Perfil</a>
            </MenuItem>
        </Menu>
    </Dropdown>
    )
}

export default MenuPadrao;