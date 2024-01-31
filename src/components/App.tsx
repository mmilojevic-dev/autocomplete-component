import cx from 'classnames'
import { TeamType } from 'types'

import { NBA_TEAMS_ENDPOINT } from '@/constants'
import { useFetchedData } from '@/hooks/useFetchedData'

import { Loading } from './common/Loading'
import { Autocomplete } from './widgets/Autocomplete'

function App() {
  const { data, loading } = useFetchedData<TeamType[]>({
    url: NBA_TEAMS_ENDPOINT
  })
  return (
    <div
      className={cx(
        'bg-gradient-to-r',
        'bg-secondary',
        'flex',
        'from-primary',
        'h-screen',
        'justify-center',
        'to-secondary'
      )}
    >
      <div
        className={cx(
          'max-w-[30rem]',
          'mt-[20vh]',
          'p-md',
          'text-center',
          'w-full'
        )}
      >
        <h1 className={cx('text-white', 'text-4xl', 'mb-base')}>NBA Teams</h1>
        {loading ? <Loading /> : <Autocomplete data={data} />}
      </div>
    </div>
  )
}

export default App
