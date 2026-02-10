const PageContainer = ({ children, styles }) => {
    return (
        <div className={styles}>
            {children}
        </div>
    );
}

export default PageContainer;