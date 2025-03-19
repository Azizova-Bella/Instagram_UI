import React, { useState } from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	IconButton,
	List,
	ListItem,
	Avatar,
	Slide,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='right' ref={ref} {...props} />;
});

const notifications = [
	{
		username: 'akika.live',
		avatar: '/src/assets/avatars/1.jpg',
		message: 'Followed you',
		time: '2m ago',
	},
	{
		username: 'zebanda.shop',
		avatar: '/src/assets/avatars/2.jpg',
		message: 'Liked your post',
		time: '10m ago',
	},
	{
		username: 'khusravenglish',
		avatar: '/src/assets/avatars/3.jpg',
		message: 'Mentioned you in a comment',
		time: '1h ago',
	},
	{
		username: 'salon_nozanin_tj',
		avatar: '/src/assets/avatars/4.jpg',
		message: 'Started following you',
		time: '3h ago',
	},
];

function NotificationsModal({ open, onClose }) {
	const [followStatus, setFollowStatus] = useState({});

	const handleFollow = (username) => {
		setFollowStatus((prev) => ({
			...prev,
			[username]: !prev[username],
		}));
	};

	return (
		<Dialog
			open={open}
			onClose={onClose}
			TransitionComponent={Transition}
			hideBackdrop
			PaperProps={{
				style: {
					position: 'fixed',
					left: 50,
					top: -20,
					height: '100vh',
					width: '350px',
					backgroundColor: 'black',
					color: 'white',
					borderRadius: 0,
					paddingBottom: '90px',
				},
			}}
		>
			<DialogTitle
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '36px',
					backgroundColor: 'black',

				}}
			>
				<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Notifications</span>
				<IconButton onClick={onClose} style={{ color: 'white' }}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>

			<DialogContent style={{ padding: '16px', backgroundColor: 'black' }}>
				<List>
					{notifications.map((item, index) => (
						<ListItem
							key={index}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								paddingLeft: 0,
								paddingRight: 0,
                paddingTop:"40px"
							}}
						>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<Avatar
									src={item.avatar}
									alt={item.username}
									style={{ marginRight: '12px', width: 40, height: 40 }}
								/>
								<div>
									<div style={{ fontWeight: 500, fontSize: '15px' }}>
										{item.username}
									</div>
									<div style={{ fontSize: '13px', color: '#aaa' }}>
										{item.message}
									</div>
								</div>
							</div>
							<button
								onClick={() => handleFollow(item.username)}
								style={{
									backgroundColor: followStatus[item.username] ? '#262626' : '#0095f6',
									color: followStatus[item.username] ? 'white' : 'white',
									border: 'none',
									borderRadius: '4px',
									padding: '5px 10px',
									fontSize: '12px',
									fontWeight: 'bold',
									cursor: 'pointer',
									outline: 'none',
								}}
							>
								{followStatus[item.username] ? 'Following' : 'Follow'}
							</button>
							<span style={{ fontSize: '12px', color: '#777' }}>{item.time}</span>
						</ListItem>
					))}
				</List>
			</DialogContent>
		</Dialog>
	);
}

export default NotificationsModal;