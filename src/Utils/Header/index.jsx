/** @format */

import React, { useContext } from 'react';
import { Block, LinkNav } from './style';
import Button from '../../Generic/Button';
import logout from '../../Assets/icons/logout.svg';
import { contextAllProdect } from '../../Context/AllProduct';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const [state] = useContext(contextAllProdect);

	const navigate = useNavigate();

	const linkLogo = () => {
		navigate('/home');
	}

	return (
		<Block>
			<Block.Left onClick={linkLogo}>
				<Block.Logo />
			</Block.Left>
			<Block.Center>
				<LinkNav to='/home'>Home</LinkNav>
				<LinkNav to='/shop'>Shop</LinkNav>
				<LinkNav to='/plantcare'>Plant Care</LinkNav>
				<LinkNav to='/blogs'>Blogs</LinkNav>
			</Block.Center>
			<Block.Right>
				<Block.ZoomImg />
				<Block.ZoomBlock>
					<Block.TrashImg />
					<Block.TrashValue>{state}</Block.TrashValue>
				</Block.ZoomBlock>
				<Button img={logout}>Login</Button>
			</Block.Right>
		</Block>
	);
};

export default Header;
