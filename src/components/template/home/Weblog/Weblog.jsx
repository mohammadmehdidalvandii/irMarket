import './Weblog.css'
import Link from '../../../module/Link/Link'
import Title from '../../../module/Title/Title'
import ArticleCard from '../../../module/ArticleCard/ArticleCard'
import db from '../../../../data/db.json'
import { useState } from 'react'

function Weblog() {
    const [articles , setArticles ] =useState([...db.articles])
  return (
    <section className="weblog">
        <div className="containers">
            <div className="contentBox">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Title title='مقالات'/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Link/>
                    </div>
                </div>
                <div className="row mt-5">
                {articles.map(article=>(
                    <div className="col-lg-3 col-md-6 col-sm-12" key={article.id}>
                        <ArticleCard
                            {...article}
                        />
                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Weblog