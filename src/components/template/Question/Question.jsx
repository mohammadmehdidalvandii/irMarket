import './Question.css';
import Title from '../../module/Title/Title';
import Accordion from '../../module/Accordion/Accordion';


function Question() {

  return (
    <section className="question">
        <div className="containers">
            <div className="contentBoc">
                <div className="row">
                    <div className="col-12">
                        <Title title="سوالات پرتکرار"/>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <Accordion/>
                    </div>
                    <div className="col-12">
                        <Accordion/>
                    </div>
                    <div className="col-12">
                        <Accordion/>
                    </div>
                    <div className="col-12">
                        <Accordion/>
                    </div>
                    <div className="col-12">
                        <Accordion/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Question