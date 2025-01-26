import { styled } from "styled-components";
import { useState } from "react";
import { useFilter } from "@/hooks/UseFilter";
import { PriorityTypes } from "@/types/PriorityTypes";

const FilterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 16px;
  }
`;

const FilterModal = styled.div`
  position: absolute;
  top: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  width: 320px;
  z-index: 999;
`;

const Section = styled.div`
  margin-bottom: 16px;

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 8px;
  }

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const OptionButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? "var(--buttom-color)" : "transparent")};
  color: ${({ active }) => (active ? "var(--bg-secondary)" : "var(--text-dark)")};
  border: 1px solid ${({ active }) => (active ? "var(--buttom-color)" : "var(--text-dark)")};
  border-radius: var(--border-radius);
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
`;

const ApplyButton = styled.button`
  background: var(--buttom-color);
  color: var(--bg-secondary);
  border: none;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
`;


export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Headphone");
  const [selectedPriority, setSelectedPriority] = useState(PriorityTypes.POPULARITY);
  const { setPriority } = useFilter();

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value);
    setSelectedPriority(value);
  };

  const applyFilters = () => {
    setIsOpen(false);
    alert(`Filters applied:\nCategory: ${selectedCategory}\nPriority: ${selectedPriority}`);
  };

  return (
    <FilterContainer>
      <FilterButton onClick={handleOpen}>Organizar por</FilterButton>
      {isOpen && (
        <FilterModal>
          <Section>
            <h3>Category</h3>
            <OptionButton
              active={selectedCategory === "Headphone"}
              onClick={() => setSelectedCategory("Headphone")}
            >
              Headphone
            </OptionButton>
            <OptionButton
              active={selectedCategory === "Headset"}
              onClick={() => setSelectedCategory("Headset")}
            >
              Headset
            </OptionButton>
          </Section>
          <Section>
            <h3>Sort By</h3>
            <OptionButton
              active={selectedPriority === PriorityTypes.POPULARITY}
              onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}
            >
              Popularity
            </OptionButton>
            <OptionButton
              active={selectedPriority === PriorityTypes.NEWEST}
              onClick={() => handleUpdatePriority(PriorityTypes.NEWEST)}
            >
              Newest
            </OptionButton>
            <OptionButton
              active={selectedPriority === PriorityTypes.OLDEST}
              onClick={() => handleUpdatePriority(PriorityTypes.OLDEST)}
            >
              Oldest
            </OptionButton>
            <OptionButton
              active={selectedPriority === PriorityTypes.HIGH_PRICE}
              onClick={() => handleUpdatePriority(PriorityTypes.HIGH_PRICE)}
            >
              High Price
            </OptionButton>
            <OptionButton
              active={selectedPriority === PriorityTypes.LOW_PRICE}
              onClick={() => handleUpdatePriority(PriorityTypes.LOW_PRICE)}
            >
              Low Price
            </OptionButton>
          </Section>
          <ApplyButton onClick={applyFilters}>Apply Filter</ApplyButton>
        </FilterModal>
      )}
    </FilterContainer>
  );
}
