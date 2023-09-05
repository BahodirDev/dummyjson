import React from 'react'


export default function Bucket({ setModal, buckets, getRemove }) {
    return (
        <div className='bucket' onClick={() => setModal(false)}>
            <div className="bucket_place" onClick={(e) => e.stopPropagation()}>

                <ul class="list-group">
                    {
                        buckets?.length ?
                            buckets?.map((s, idx) => {
                                return (
                                    <li class="list-group-item  bucket_list" >
                                        <bold>{s.title}</bold>
                                        <span class="">
                                            <img src={s.thumbnail} style={{ height: "50px", width: "50px", borderRadius: "50%" }} alt="" />
                                            <button className='btn btn-danger' style={{marginLeft:"15px"}} onClick={()=>getRemove(s.id)}>X</button>
                                        </span>
                                    </li>

                                )
                            })
                            : 'Savatchada mahsulot mavjud emas'
                    }
                </ul>
            </div>
        </div>
    )
}
