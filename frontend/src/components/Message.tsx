import React from 'react'
import { Alert } from 'react-bootstrap'

interface MessageProps {
  variant: string
  children?: any
}

const Message: React.FC<MessageProps> = ({
  variant = 'info',
  children,
}: MessageProps) => {
  return <Alert variant={variant}>{children}</Alert>
}

export default Message
