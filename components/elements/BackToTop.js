
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a className="scroll-top scroll-to-target" href="#top">
                    <i className="fas fa-arrow-up"></i>
                </a>
                
            )}
        </>
    )
}