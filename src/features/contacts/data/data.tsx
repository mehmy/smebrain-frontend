import {
  IconBuilding,
  IconCircle,
  IconCircleCheck,
  IconCircleX,
  IconMail,
  IconPhone,
  IconUser,
  IconUsers,
} from '@tabler/icons-react'

export const categories = [
  {
    value: 'client',
    label: 'Client',
    icon: IconUser,
  },
  {
    value: 'prospect',
    label: 'Prospect',
    icon: IconUsers,
  },
  {
    value: 'vendor',
    label: 'Vendor',
    icon: IconBuilding,
  },
]

export const statuses = [
  {
    value: 'active',
    label: 'Active',
    icon: IconCircleCheck,
  },
  {
    value: 'inactive',
    label: 'Inactive',
    icon: IconCircleX,
  },
  {
    value: 'prospect',
    label: 'Prospect',
    icon: IconCircle,
  },
]

export const contactTypes = [
  {
    label: 'Email',
    value: 'email',
    icon: IconMail,
  },
  {
    label: 'Phone',
    value: 'phone',
    icon: IconPhone,
  },
  {
    label: 'Both',
    value: 'both',
    icon: IconUser,
  },
] 