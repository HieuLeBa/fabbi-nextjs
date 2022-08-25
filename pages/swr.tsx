import { StudentDetail } from '@/components/swr';
import * as React from 'react';

export interface SWRPageProps {
}

export default function SWRPage () {
  return (
    <div>
        <h1>SWR layout</h1>

        <ul>
          <li><StudentDetail studentId="sktwi1cgkkuif36f3" /></li>
          <li><StudentDetail studentId="sktwi1cgkkuif36f3" /></li>
          <li><StudentDetail studentId="sktwi1cgkkuif36f3" /></li>
        </ul>
    </div>
  );
}
