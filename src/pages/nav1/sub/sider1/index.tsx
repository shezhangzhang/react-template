import { Button, Select } from 'antd';
import Demo from './components/demo';

export default function Sider1() {
  return (
    <div>
      <div>Sider1</div>
      <Select
        defaultValue="lucy"
        className="w-28 mr-4 mt-6"
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
      <Button type="primary">button</Button>
      <div className="mt-3">
        <Demo />
      </div>
    </div>
  );
}
