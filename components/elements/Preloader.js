
export default function Preloader() {
    return (
        <>

        <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">x</div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="F" className="letters-loading">
                                F
                            </span>
                            <span data-text-preloader="i" className="letters-loading">
                                i
                            </span>
                            <span data-text-preloader="n" className="letters-loading">
                                n
                            </span>
                            <span data-text-preloader="a" className="letters-loading">
                                a
                            </span>
                            <span data-text-preloader="n" className="letters-loading">
                                n
                            </span>
                            <span data-text-preloader="c" className="letters-loading">
                                c
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                e
                            </span>
                            <span data-text-preloader="r" className="letters-loading">
                                r
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
