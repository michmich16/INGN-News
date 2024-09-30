import style from './Footer.module.scss';

export const Footer = () =>{

    return(
        <>
        <footer className={style.footerStyle}>
            <div className={style.footerContent}>
                <h5>Adresse:</h5>
                <ul>
                    <li>Intet nyt - Godt nyt ApS</li>
                    <li>Tulipanvej 232</li>
                    <li>7320</li>
                    <li>Valby Øster</li>
                </ul>
            </div>
            <div className={style.footerContent}>
                <h5>Links</h5>
                <ul>
                    <li><a href="">vikanweb.dk</a></li>
                    <li><a href="">overpådenandenside.dk</a></li>
                    <li><a href="">restsinformation.dk</a></li>
                    <li><a href="">nogetmednews.dk</a></li>
                </ul>
            </div>
            <div className={style.footerContent}>
            <h5>Politik</h5>
                <ul>
                    <li><a href="">Privatlivspolitik</a></li>
                    <li><a href="">Cookiepolitik</a></li>
                    <li><a href="">Købsinformation</a></li>
                    <li><a href="">Delingspolitik</a></li>
                </ul>
            </div>
            <div className={style.footerContent}>
            <h5>Kontakt</h5>
                <ul>
                    <li>ingn@nyhed.dk</li>
                    <li>telefon 23232323</li>
                    <li>fax: 123123-333</li>
                </ul>
            </div>
        </footer>
        </>
    )
}