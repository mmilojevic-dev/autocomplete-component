import cx from 'classnames'

export const Loading: React.FC = () => {
  return (
    <div className={cx('text-white', 'font-black', 'text-center')}>
      Loading...
    </div>
  )
}
