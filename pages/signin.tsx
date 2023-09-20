import { useRouter } from "next/router";
import { Button, Space, Typography, Form, Input } from "antd";
import { AuthLayout } from "layouts/auth.layout.tsx";
import {useCallback} from "react";
import { useProfileManager } from "@/hooks/account.hook";
const { Text, Link, Paragraph } = Typography;

export default function Signin() {
  const router = useRouter();
  const [_, updateProfile] = useProfileManager();

  const handleFormSubmit = useCallback((values: any) => {
    console.log("handleFormSubmit: ", values)
    updateProfile(values)
    router.push('/')
  }, []);

  return (
    <AuthLayout title="Sign in">
      <Form
        name="signin"
        layout="vertical"
        className="w-full mt-10"
        onFinish={handleFormSubmit}
        requiredMark={false}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true },
            {
              type: "email",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Button block type="primary" htmlType="submit" className="mt-2">
          Sign in
        </Button>
      </Form>
      <Paragraph className="mt-6">
        <Text type="secondary">Don’t have an account?</Text>
        <Link className="ml-3" onClick={() => router.push("/signup")}>
          Sign up
        </Link>
      </Paragraph>
    </AuthLayout>
  );
}
