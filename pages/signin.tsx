import { useRouter } from "next/router";
import { Button, Space, Typography, Form, Input } from "antd";
import { AuthLayout } from "layouts/auth.layout.tsx";
const { Text, Link, Paragraph } = Typography;

export default function Signin() {
  const router = useRouter();

  return (
    <AuthLayout title="Sign in">
      <Form
        name="signin"
        layout="vertical"
        className="w-full mt-10"
        onFinish={() => {
          router.push("/");
        }}
      >
        <Form.Item label="Email" name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
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
