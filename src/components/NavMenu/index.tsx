'use client'

import React, { ReactNode } from 'react'
import styles from './styles.module.scss';

export default function NavMenu() {
  return (
    <div className={styles.menu}>
      <span>LOGO AQUI</span>
    <a>
      <span>SOBRE</span>
    </a>
    <a>
      <span>DÚVIDAS</span>
    </a>
    <a>
      <span>PARCEIROS</span>
    </a>
    </div>
  )
}
