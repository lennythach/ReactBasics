export default function Title({title, subtitle}) {
    return (
    <>
        <h1 className="title">{title}</h1>
        <br/>
        <div className="subtitle">
        <h2>{subtitle}</h2>
        </div>
    </>
    )
}