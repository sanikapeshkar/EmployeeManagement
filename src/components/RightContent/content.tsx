import ContentEach from "../ContentEach/ContentEach";
import styles from "./content.module.scss";

export default function Content(props: ContentProps) {
  const displayedData = props.data.filter((item: Data) => item.id == props.id);
  console.log(displayedData);
  return (
    <>
      <div className={styles.Content}>
        {displayedData.map((each, i) => {
          return (
            <ContentEach
              name={each.name}
              email={each.email}
              username={each.username}
              id={each.id}
              city={each.address.city}
              street={each.address.street}
              handlePrevious={props.handlePrevious}
              handleNext={props.handleNext}
              handleDelete={props.handleDelete}
            />
          );
        })}
      </div>
    </>
  );
}
