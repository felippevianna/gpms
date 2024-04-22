import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

const MenuPadrao  = () => {
    return (
    <Dropdown>
        <MenuButton>Menu</MenuButton>
        <Menu>
        <MenuItem>Buscar Caronas</MenuItem>
        <MenuItem>Cadastrar Carona</MenuItem>
        <MenuItem>Meu Perfil</MenuItem>
        </Menu>
    </Dropdown>
    )
}

export default MenuPadrao;
