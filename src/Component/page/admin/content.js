import React, { memo } from 'react'

import clsx from 'clsx'
import style from './admin.module.scss'

function Content() {
  return (
    <div className='container-fluid'>
      <div className={clsx(style.admin)}>
        <div className="row">
          <div className="col-md-3">trang chu</div>
          <div className="col-md-9">content</div>
        </div>
      </div>
    </div>
  )
}

export default memo(Content)
