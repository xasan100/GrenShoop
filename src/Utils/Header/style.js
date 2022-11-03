/** @format */

import styled from 'styled-components';
import logo from '../../Assets/image/logo.png';
import { NavLink } from 'react-router-dom';
import { ReactComponent as zoom } from '../../Assets/icons/zoom.svg';
import { ReactComponent as trash } from '../../Assets/icons/trash.svg';

const Block = styled.div`
	height: 78px;
	border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
	display: flex;
	justify-content: space-between;
	> div {
		display: flex;
	}
`;
Block.Left = styled.div`
	justify-content: center;
	align-items: center;
	height: 100%;
`;
Block.Center = styled.div`
	align-items: center;
	gap: 40px;
	height: 100%;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #3d3d3d;
	.active {
		font-weight: 700;
		font-size: 16px;
		line-height: 20px;
		color: #3d3d3d;
		border-bottom: 3px solid #46a358;
	}
`;
Block.Right = styled.div`
	height: 100%;
    align-items: center;
	gap: 30px;
`;

Block.Logo = styled.img.attrs({
	src: `${logo}`,
})`
	cursor: pointer;
	width: 170px;
`;
const LinkNav = styled(NavLink)`
	color: #3d3d3d;
	padding: 10px;
	border-bottom: 3px solid #46a35900;
`;
Block.ZoomBlock = styled.div`
	position: relative;
`;

Block.ZoomImg = styled(zoom)`
	cursor: pointer;
	/* position: absolute; */
`;
Block.TrashValue = styled.div`
	width: 18px;
	height: 18px;
	background: #46a358;
	border: 2px solid #ffffff;
	border-radius: 25px;
	position: absolute;
	top: -5px;
	right: -10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 14px;
`;
Block.TrashImg = styled(trash)`
	cursor: pointer;
`;

export { Block, LinkNav };
