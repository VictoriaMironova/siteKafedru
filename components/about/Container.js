import React, {Component} from 'react';
import {
    ListGroup,
    ListGroupItem,
    Popover,
    OverlayTrigger
} from 'react-bootstrap';
import {
    Card,
    CardTitle,
    CardText
} from 'material-ui/Card';
import {
    Tabs,
    Tab
} from 'material-ui/Tabs';
// import Phone  from 'material-ui/svg-icons/communication/phone';
import Glob  from 'material-ui/svg-icons/communication/textsms';
import Det  from 'material-ui/svg-icons/communication/message';
import Edu  from 'material-ui/svg-icons/social/school';
import Realiz  from 'material-ui/svg-icons/social/public';
// import Realiz  from 'material-ui/svg-icons/action/lightbulb-outline';
import Stand from "material-ui/svg-icons/action/check-circle";
import Cert from 'material-ui/svg-icons/av/new-releases';

export default class Container extends Component {

    render(){
        const popoverHoverFocus = (
            <Popover id="popover-trigger-hover-focus" title="стандарт зі спеціальності">
                Продивитись/Завантажити
            </Popover>
        );
        return(
            <div className="container">
                <Card>
                    <Tabs className="main_Tab">
                        <Tab
                            icon={<Glob/>}
                            label="Загалом"
                        >
                            <CardTitle title="Кафедра прикладних інформаційних систем" subtitle="" />
                            <CardText>
                                <p>Кафедра прикладних інформаційних систем заснована у червні місяці 2016 року. На кафедрі працюють висококваліфіковані викладачі, які мають значний педагогічний і практичний комерційний досвід у розробленні та застосуванні сучасних інформаційних технологій. Прикладні системи – це програмні засоби, призначені для розв’язання прикладних задач та орієнтовані на автоматизацію конкретних видів економічної або іншої діяльності.</p>
                            </CardText>
                        </Tab>

                        <Tab
                            icon={<Det/>}
                            label="Детальнiше"
                        >
                            <CardTitle title="Прикладні інформаційні системи" subtitle="" />
                            <CardText>
                                <p>Прикладні інформаційні системи – це перспективний напрям навчання і діяльності, адже зачіпає питання впровадження інновацій у різні види діяльності. Це трансдисциплінарна наука, що об’єднує різноманітні сектори та напрями діяльності і галузей знань. Прикладні інформаційні системи є тим двигуном, без якого практично неможливо розв’язати задачі прикладних сфер, як-от, ІТ в агросекторі, електроенергетиці, машинобудуванні, фінансах і банківській діяльності тощо. Наприклад, економіка зараз трансформується у цифрову, форма організації праці у мережеву, а підприємства стають віртуальними. Нині неможливо уявити роботу фахівця галузі інформаційних технологій без комп’ютера, мережі, інформаційної системи. Адже практично кожну прикладну задачу виконують за допомогою певних програмних продуктів: 1С, Галактика, Парус, Audit Expert, Risky Project, Master MRP та інші. Студенти впродовж навчання отримують фундаментальні знання у сфері аналітики, розроблення і впровадження застосунків у сфері економіки і фінансів, медицини, освіти, науки тощо.</p>
                            </CardText>
                        </Tab>

                        <Tab
                            icon={<Edu />}
                            label="Що ти вивчеш"
                        >
                            <CardTitle title="Наші викладачі навчать" subtitle="" />
                            <CardText>
                                <ListGroup>
                                    <ListGroupItem>застосовувати методи та програмні засоби оптимізації для розв’язання прикладних задач</ListGroupItem>
                                    <ListGroupItem>розробляти системи підтримки прийняття рішень</ListGroupItem>
                                    <ListGroupItem>розв’язувати задачі прогнозування і моделювання процесів різних прикладних сфер і здійснювати їх системний аналіз</ListGroupItem>
                                    <ListGroupItem>розробляти бази (сховища) даних або знань, обирати їх системи керування</ListGroupItem>
                                    <ListGroupItem>розробляти математичні модельні рішення складних процесів</ListGroupItem>
                                    <ListGroupItem>розробляти і впроваджувати прикладні інформаційні системи з використанням новітніх ІКТ на основі проектного менеджменту тощо.</ListGroupItem>
                                </ListGroup>
                                <p>Фахівці з прикладних інформаційних систем покликані реалізовувати всі етапи створення програмного забезпечення для замовника: визначення та аналізу вимог замовника, проектування архітектури програмної системи, детального проектування, конструювання, комплексування програмних засобів, їх тестування, інсталяції, підтримання, супроводження, а також сприяти своєчасній заміні/виведенню програмних засобів з експлуатації.</p>
                            </CardText>
                        </Tab>

                        <Tab
                            icon={<Realiz />}
                            label="реалiзацiя"
                        >
                            <CardTitle title="Галузі знань прикладних інформаційних систем" subtitle="" />
                            <CardText>
                                <ListGroup>
                                    <ListGroupItem header="У сфері математичної підготовки:" bsStyle="info"/>
                                    <ListGroupItem>Дискретна математика.</ListGroupItem>
                                    <ListGroupItem>Основи математичної логіки.</ListGroupItem>
                                    <ListGroupItem>Методи обчислень.</ListGroupItem>
                                    <ListGroupItem>Графи та дерева.</ListGroupItem>
                                    <ListGroupItem>Теорія ймовірностей.</ListGroupItem>
                                    <ListGroupItem>Алгебраїчні структури.</ListGroupItem>
                                    <ListGroupItem>Чисельні методи.</ListGroupItem>
                                    <ListGroupItem>Методи оптимізації.</ListGroupItem>
                                    <ListGroupItem>Дослідження операцій.</ListGroupItem>
                                    <ListGroupItem>Математичне моделювання тощо</ListGroupItem>
                                    <ListGroupItem header="У сфері програмування:" bsStyle="info"/>
                                    <ListGroupItem>Алгоритми і структури даних.</ListGroupItem>
                                    <ListGroupItem>Основи програмування.</ListGroupItem>
                                    <ListGroupItem>Об’єктно-орієнтоване програмування.</ListGroupItem>
                                    <ListGroupItem>Паралельні та розподілені обчислення тощо.</ListGroupItem>
                                    <ListGroupItem header="У сфері технологій і процесів розроблення програмного забезпечення:" bsStyle="info"/>
                                    <ListGroupItem>Методології розроблення та супроводження програмного забезпечення.</ListGroupItem>
                                    <ListGroupItem>Аналіз вимог до ПЗ.</ListGroupItem>
                                    <ListGroupItem>Проектування архітектури.</ListGroupItem>
                                    <ListGroupItem>Розроблення веб-застосунків.</ListGroupItem>
                                    <ListGroupItem>Розроблення сервіс-орієнтованих та клієнт-серверних застосунків.</ListGroupItem>
                                    <ListGroupItem>Тестування програмного забезпечення.</ListGroupItem>
                                    <ListGroupItem>Сучасні методології розробки.</ListGroupItem>
                                    <ListGroupItem header="У сфері технічної підготовки:" bsStyle="info"/>
                                    <ListGroupItem>Архітектура, будова та функціонування обчислювальних систем.</ListGroupItem>
                                    <ListGroupItem>Основи сучасних операційних систем.</ListGroupItem>
                                </ListGroup>

                                <p><b>Професійна діяльність випускників пов’язана з індустрією інформаційних технологій та розробленням, упровадженням і супроводженням конкурентоздатного прикладного програмного забезпечення  у сферах</b></p>
                                <ListGroup>
                                    <ListGroupItem header="Економіки"> У загальному вигляді інформаційні технології в економіці визначають як сукупність дій над економічною інформацією для прийняття оптимальних ефективних рішень.</ListGroupItem>
                                    <ListGroupItem header="Видавництва">Для підприємств видавничо-поліграфічної галузі є важливим застосування інформаційних технологій для підвищення ефективності процесів підготовлення та виготовлення поліграфічної продукції, організації документообігу, адміністрування та поширення видань.</ListGroupItem>
                                    <ListGroupItem header="Юриспруденції">Розробники займаються розробленням і супроводженням спеціальних програм для організації якісної і швидкої роботи юристів, відбулося широке поширення правових довідкових систем. Їх тепер нараховують більше сотні, приміром Ліга Закон.</ListGroupItem>
                                    <ListGroupItem header="Менеджменту"> За допомогою прикладних інформаційних систем збирають і впорядковують дані програмних систем, які забезпечують вироблення рішень на основі автоматизації бізнес-процесів у сфері керування, інформаційні системи менеджменту сприяють більшій оперативності та конкретності менеджерської діяльності, забезпечують своєчасність усіх управлінських розрахунків, контроль за виконанням управлінських рішень і зворотній зв’язок, удосконалення менеджерської діяльності підприємств та підвищення на цій основі ефективності їх роботи.</ListGroupItem>
                                    <ListGroupItem header="Дизайну">Ця предметна сфера використовує різні графічні програми і редактори, що є частиною інформаційної культури, полегшуючи роботу дизайнерів, сприяючи появі інновацій і нових напрямків стилю у дизайні третього тисячоліття.</ListGroupItem>
                                    <ListGroupItem header="Туризму">Ця індустрія пристосована для впровадження сучасних інформаційних технологій, тому зазнала значного впливу науково-технічного прогресу. Охоплює інформаційні системи менеджменту, глобальні системи бронювання, мультимедіа, інтегровані комунікаційні мережі для забезпечення діяльності туризму тощо.</ListGroupItem>
                                    <ListGroupItem header="Медицини">Новітні інформаційні технології все більше використовують у галузі охорони здоров’я, що буває зручним, а часом просто необхідним. Завдяки цьому медицина, в тому числі і нетрадиційна, набуває сьогодні абсолютно нових рис. У багатьох медичних дослідженнях обов’язково використовують комп’ютер і прикладне програмне забезпечення. Цей процес супроводжують суттєвими змінами в медичній теорії та практиці, що пов’язані з внесенням коректив, як на етапі підготовки медичних працівників, так і для медичної практики.</ListGroupItem>
                                    <ListGroupItem header="Освіти">Процес навчання, особливо дистанційного, обов’язково використовує прикладне програмне забезпечення. В освіті інформатизація відкриває доступ до світових інформаційних ресурсів; зменшує залежність викладання і навчання від місцезнаходження учасників процесу та часових рамок; сприяє вдосконаленню форм і змісту навчального процесу, підвищенню ефективності засвоєння навчального матеріалу та персоніфікації навчання, інтеграції навчальної, дослідницької та виробничої діяльності; значно збільшує обсяги ресурсів, якими студенти можуть користуватися за межами аудиторії; сприяє підвищенню мотивації до навчання та розвитку креативного мислення. Інтерактивність і мультимедійна наочність сприяють кращому поданню і засвоєнню інформації.</ListGroupItem>

                                </ListGroup>
                            </CardText>
                        </Tab>

                        <Tab
                            icon={<Cert/>}
                            label="теми дипломних"
                        >
                            <CardTitle title="Можливі теми дипломних студентських робіт" subtitle="" />
                            <CardText>
                                <ListGroup>
                                    <ListGroupItem>Розробка веб-орієнтованої інформаційної CRM-системи.</ListGroupItem>
                                    <ListGroupItem>Розробка програмного забезпечення для експрес-моніторингу забруднення навколишнього середовища.</ListGroupItem>
                                    <ListGroupItem>Розробка автоматизованої системи бюджетування проектів ІТ-компанії.</ListGroupItem>
                                    <ListGroupItem>Розробка і моделювання розподіленої системи керування вантажними механізмами.</ListGroupItem>
                                    <ListGroupItem>Розробка програмного забезпечення автоматизації складського обліку.</ListGroupItem>
                                    <ListGroupItem>Інформаційна система вибору маршруту автотранспортного сполучення.</ListGroupItem>
                                    <ListGroupItem>Програмна реалізація оцінки вартості житлових та нежитлових приміщень.</ListGroupItem>
                                    <ListGroupItem>Проектування та програмна реалізація системи для складання розкладу занять ВНЗ.</ListGroupItem>
                                    <ListGroupItem>Моделювання економічних динамічних систем через диференціальні рівняння або їх системи.</ListGroupItem>
                                    <ListGroupItem>Програмна реалізація моделі соціальної мобілізації.</ListGroupItem>
                                    <ListGroupItem>Розробка генетичних алгоритмів для розв’язання NP повних задач.</ListGroupItem>
                                    <ListGroupItem>Розробка системи підтримки рішень з управління кіберзахистом у корпоративній інформаційній системі.</ListGroupItem>
                                    <ListGroupItem>Розробка адаптивної експертної системи з інформаційної безпеки із використанням процедури кластеризації ознак аномалій</ListGroupItem>
                                </ListGroup>
                            </CardText>
                        </Tab>
                        <Tab
                            icon={<Stand/>}
                            label="стандарт"
                        >
                            <CardTitle title="Завантажити стандарт зі спеціальності" subtitle="" />
                            <CardText>
                                <p>Кафедра прикладних інформаційних систем здійснює навчання студентів за програмою «Прикладні інформаційні системи» спеціальності 122 «Комп’ютерні науки та інформаційні технології» галузі знань 12 «Інформаційні технології».</p>
                                <p>Фахівці з прикладних інформаційних систем орієнтовані на використання новітніх інформаційно-комунікаційних технологій для прийняття управлінських рішень у різних прикладних сферах і галузях національної економіки.</p>
                                <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus} style={{ marginTop: '100px' }}>
                                    <a  className="link_word" href="https://drive.google.com/file/d/0BwuOv3Xw53PoZWRYZmFCdUZJejA/view?usp=sharing" target="_blank"><img src="./src/word.svg"  className="WORD" alt="word"/></a>
                                </OverlayTrigger>
                            </CardText>
                        </Tab>
                    </Tabs>
                </Card>
            </div>
        )
    }

}
