import { render, screen } from "@testing-library/react";
import { CourseItem } from "./course-item";
import userEvent from "@testing-library/user-event";

describe("course item", () => {
  it("should call delete calback", async () => {
    const onDelete = jest.fn();
    render(
      <CourseItem
        course={{
          id: "eewdewfew111",
          description: "wedewfwefewf333",
          name: "edwefwfwe2222",
        }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText("Delete"));

    expect(onDelete).toHaveBeenCalled();
  });
});
