import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'


const MENU_STYPES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYPES}
          icon={<DashboardIcon />}
          label="QuanDev"
          clickable
        />
        <Chip
          sx={MENU_STYPES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYPES}
          icon={<AddToDriveIcon />}
          label="Add to Drive"
          clickable
        />
        <Chip
          sx={MENU_STYPES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYPES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant='outlined' startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup
          max={3}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title='quandev'>
            <Avatar
              alt="Remy Sharp"
              src="https://trungquandev.com/wp-content/uploads/2023/08/transparent-main-avatar-circle-min-trungquandev-codetq@3x-Large.jpeg" />
          </Tooltip>
          <Tooltip title='quandev'>
            <Avatar
              alt="Remy Sharp"
              src="https://lh3.googleusercontent.com/ogw/AF2bZyigxHdLamtAlX1TOeIljDsep2cn5sBvlIwjDiuMW3JQAbw=s32-c-mo" />
          </Tooltip>
          <Tooltip title='quandev'>
            <Avatar
              alt="Remy Sharp"
              src="https://trungquandev.com/wp-content/uploads/2023/08/transparent-main-avatar-circle-min-trungquandev-codetq@3x-Large.jpeg" />
          </Tooltip>
          <Tooltip title='quandev'>
            <Avatar
              alt="Remy Sharp"
              src="https://trungquandev.com/wp-content/uploads/2023/08/transparent-main-avatar-circle-min-trungquandev-codetq@3x-Large.jpeg" />
          </Tooltip>
          <Tooltip title='quandev'>
            <Avatar
              alt="Remy Sharp"
              src="https://trungquandev.com/wp-content/uploads/2023/08/transparent-main-avatar-circle-min-trungquandev-codetq@3x-Large.jpeg" />
          </Tooltip>
          <Tooltip title='quandev'>
            <Avatar
              alt="Remy Sharp"
              src="https://trungquandev.com/wp-content/uploads/2023/08/transparent-main-avatar-circle-min-trungquandev-codetq@3x-Large.jpeg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
