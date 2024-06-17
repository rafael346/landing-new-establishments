import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { Text } from '@chakra-ui/react';

import styles from './styles.module.scss';

function Dropdown({ title, children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text >{title}</Text>
        <div className={styles.icon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {isOpen && <div className={styles.body}>{children}</div>}
    </div>
  );
}

export default Dropdown;
