import React from 'react'
import Stat from './Stat'
import { Eye,ClipboardCheck,MessageCircle,Star } from 'lucide-react';

const CommunityStates = () => {
  return (
    <div className='mb-3'>
        <h1 className='font-medium'>CommunityStates</h1>
        <Stat elem=<Eye/> label="Views" labelno="629" no="+7"/>
        <Stat elem=<ClipboardCheck/> label="Solutions" labelno="8" no="0"/>
        <Stat elem=<MessageCircle/> label="Discuss" labelno="0" no="0"/>
        <Stat elem=<Star/> label="Reputation" labelno="9" no="0"/>
    </div>
  )
}

export default CommunityStates