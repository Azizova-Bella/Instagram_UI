// src/features/search/ui/SearchModal.jsx
import React from 'react'
import {
	Dialog,
	DialogTitle,
	DialogContent,
	IconButton,
	List,
	ListItem,
	Avatar,
	Slide,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

// Анимация появления слева
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='right' ref={ref} {...props} />
})

const recentSearches = [
	{
		username: 'akika.live',
		avatar: '/src/assets/avatars/1.jpg',
		desc: 'Islamic store',
	},
	{
		username: 'zebanda.shop',
		avatar: '/src/assets/avatars/2.jpg',
		desc: 'Zebanda fashion',
	},
	{
		username: 'khusravenglish',
		avatar: '/src/assets/avatars/3.jpg',
		desc: 'English Tutor',
	},
	{
		username: 'salon_nozanin_tj',
		avatar: '/src/assets/avatars/4.jpg',
		desc: 'Beauty salon',
	},
	{
		username: 'furushi_kurtahoi_arusi',
		avatar: '/src/assets/avatars/5.jpg',
		desc: 'Wedding dress store',
	},
	{
		username: 'sanduk.tj_amriddin',
		avatar: '/src/assets/avatars/6.jpg',
		desc: 'Furniture store',
	},
	{
		username: 'chodar.tj',
		avatar: '/src/assets/avatars/7.jpg',
		desc: 'Hijab clothing',
	},
]

function SearchModal({ open, onClose }) {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			TransitionComponent={Transition}
			hideBackdrop
			PaperProps={{
				style: {
					position: 'fixed',
					left: 40,
					top: -20,
					height: '100vh',
					width: '350px',
					backgroundColor: 'black',
					color: 'white',
					borderRadius: 0,
					paddingBottom:"90px"
				},
			}}
		>
			<DialogTitle
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '16px',
					backgroundColor: 'black',
				}}
			>
				<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Search</span>
				<IconButton onClick={onClose} style={{ color: 'white' }}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>

			<DialogContent style={{ padding: '16px', backgroundColor: 'black' }}>
				<input
					type='text'
					placeholder='Search'
					style={{
						width: '90%',
						padding: '10px 14px',
						borderRadius: '8px',
						border: '1px solid #444',
						backgroundColor: '#1e1e1e',
						color: 'white',
						marginBottom: '16px',
						fontSize: '16px',
					}}
				/>

				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						marginBottom: '12px',
					}}
				>
					<strong style={{ fontSize: '16px' }}>Recent</strong>
					<span
						style={{ color: '#3f51b5', cursor: 'pointer', fontSize: '14px' }}
					>
						Clear all
					</span>
				</div>

				<List>
					{recentSearches.map((item, index) => (
						<ListItem
							key={index}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								paddingLeft: 0,
								paddingRight: 0,
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
										{item.desc}
									</div>
								</div>
							</div>
							<IconButton
								edge='end'
								aria-label='delete'
								style={{ color: '#ccc' }}
							>
								<CloseIcon fontSize='small' />
							</IconButton>
						</ListItem>
					))}
				</List>
			</DialogContent>
		</Dialog>
	)
}

export default SearchModal
