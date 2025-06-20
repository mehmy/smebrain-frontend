import { IconDownload, IconPlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useContacts } from '../context/contacts-context'

export function ContactsPrimaryButtons() {
  const { setOpen } = useContacts()
  return (
    <div className='flex gap-2'>
      <Button
        variant='outline'
        className='space-x-1'
        onClick={() => setOpen('import')}
      >
        <span>Import</span> <IconDownload size={18} />
      </Button>
      <Button className='space-x-1' onClick={() => setOpen('create')}>
        <span>Create Contact</span> <IconPlus size={18} />
      </Button>
    </div>
  )
} 