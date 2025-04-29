import Modal from 'react-modal'
import classNames from 'classnames'
import CloseButton from '../CloseButton'
import { motion } from 'framer-motion'
import useWindowSize from '../hooks/useWindowSize'
import type { Props as ReactModalProps } from 'react-modal'
import type { MouseEvent } from 'react'

export interface DialogProps extends ReactModalProps {
    closable?: boolean
    contentClassName?: string
    height?: string | number
    onClose?: (e: MouseEvent<HTMLSpanElement>) => void
    width?: number
}

const Dialog = (props: DialogProps) => {
    const currentSize = useWindowSize()

    const {
        bodyOpenClassName,
        children,
        className,
        closable = true,
        closeTimeoutMS = 150,
        contentClassName,
        height,
        isOpen,
        onClose,
        overlayClassName,
        portalClassName,
        style = {}, // Default fallback to avoid undefined spread
        width = 520,
        ...rest
    } = props

    const onCloseClick = (e: MouseEvent<HTMLSpanElement>) => {
        onClose?.(e)
    }

    const renderCloseButton = (
        <CloseButton
            absolute
            className="ltr:right-6 rtl:left-6 top-4.5"
            onClick={onCloseClick}
        />
    )

    const contentStyle = {
        content: {
            inset: 'unset',
            margin: 'auto',
            borderRadius: '8px',
            overflow: 'auto',
            padding: '20px',
            background: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        } as React.CSSProperties,
        ...style,
    }

    if (width !== undefined) {
        contentStyle.content.width = width

        if (
            typeof currentSize.width !== 'undefined' &&
            currentSize.width <= width
        ) {
            contentStyle.content.width = 'auto'
        }
    }

    if (height !== undefined) {
        contentStyle.content.height = height
    }

    const defaultDialogContentClass = 'dialog-content'

    const dialogClass = classNames(defaultDialogContentClass, contentClassName)

    return (
        <Modal
            className={{
                base: classNames('dialog', className),
                afterOpen: 'dialog-after-open',
                beforeClose: 'dialog-before-close',
            }}
            overlayClassName={{
                base: classNames(
                    'fixed inset-0 flex items-center justify-center bg-black/50 z-[1000]',
                    overlayClassName
                ),
                afterOpen: 'dialog-overlay-after-open',
                beforeClose: 'dialog-overlay-before-close',
            }}
            portalClassName={classNames('dialog-portal', portalClassName)}
            bodyOpenClassName={classNames('dialog-open', bodyOpenClassName)}
            ariaHideApp={false}
            isOpen={isOpen}
            style={contentStyle}
            closeTimeoutMS={closeTimeoutMS}
            {...rest}
        >
            <motion.div
                className={dialogClass}
                style={{ padding: '44px 71px' }}
                initial={{ transform: 'scale(0.9)' }}
                animate={{
                    transform: isOpen ? 'scale(1)' : 'scale(0.9)',
                }}
            >
                {closable && renderCloseButton}
                {children}
            </motion.div>
        </Modal>
    )
}

Dialog.displayName = 'Dialog'

export default Dialog
